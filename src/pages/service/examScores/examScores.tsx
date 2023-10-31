import { View, Picker, Text } from '@tarojs/components';
import { useEffect, useState } from 'react';
import Taro, { useLoad } from '@tarojs/taro';
import { makeRequest } from '@/common/utilities/requester';

import useUser from '@/store/userInfo';
import useRequest from '@/store/request';

import Header from '@/common/Header/Header';

import './examScores.css';

interface StudyDetailType {
    pass: string;
    fail: string;
    unStudy: string;
    studying: string;
}

interface ScoresType {
    kcmc: string // 课程名称
    cj: string // 分数
    xf: string // 学分
}

export default function examScores() {

    const [grade, headerCookie] = useUser(state => [state.grade, state.headerCookie]);
    const authUrl = useRequest(state => state.authUrl);

    const [gpa, setGpa] = useState<string>('0.00');
    const [studyDetail, setStudyDetail] = useState<StudyDetailType>({
        pass: '-',
        fail: '-',
        unStudy: '-',
        studying: '-'
    });

    const [gradeQuery, setGradeQuery] = useState<number[]>([]);
    const [gradeIndex, setGradeIndex] = useState<number>(0);

    const [termQuery] = useState<string[]>(['第一学期', '第二学期']);
    const [termIndex, setTermIndex] = useState<number>(0);

    const [totalPage, setTotalPage] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [scores, setScores] = useState<ScoresType[]>([]);


    useEffect(() => {
        const newQuery: number[] = [];
        const currentYear = new Date().getFullYear();

        for (let i = 0; i <= currentYear - Number(grade); i++) {
            newQuery.push(Number(grade) + i);
        }

        setGradeQuery(newQuery.reverse());
    }, [])

    // 获取全学年 GPA
    useLoad(async () => {
        Taro.showLoading({
            title: '加载中'
        });

        const res = await makeRequest({
            method: 'POST',
            url: authUrl,
            path: '/withCookie',
            requestService: 'lkofficial',
            data: {
                action: 'getGPA',
                headerCookie
            },
            timeout: 5000
        });

        if (res.statusCode === 200) {
            setGpa(res.data.data.gpa);
            setStudyDetail(res.data.data.studyDetail);
            Taro.hideLoading();
        };
    });

    useEffect(() => {
        setCurrentPage(1);
        setTotalPage(1);
        setScores([]);
    }, [gradeIndex, termIndex]);

    useEffect(() => {
        (async () => {
            if (totalPage <= currentPage) return await getScores();

            getScores();
        })();
    }, [totalPage, currentPage]);

    const getScores = async () => {
        if (totalPage < currentPage) return;

        Taro.showLoading({
            title: '加载中'
        })

        const res = await makeRequest({
            method: 'POST',
            url: authUrl,
            path: '/withCookie',
            requestService: 'lkofficial',
            data: {
                action: 'getScores',
                headerCookie,
                query: {
                    xnm: gradeQuery[gradeIndex],
                    xqm: termQuery[termIndex] === '第一学期' ? '3' : '12',
                    "queryModel.currentPage": currentPage
                }
            },
            timeout: 5000
        });

        if (res.statusCode === 200) {
            setScores(scores.concat(res.data.data.items));

            setTotalPage(res.data.data.totalPage);
            setCurrentPage(res.data.data.currentPage + 1);

            Taro.hideLoading();
        };
    };

    return (
        <View className='examScores-wrapper'>
            <Header title='成绩查询' />
            <View className='examScores-content'>
                <View className='examScores-gpa'>
                    <Text>我的 GPA（所有课程）</Text>
                    <Text className='examScores-gpa-text'>{gpa}</Text>
                </View>
                <View className='examScore-studyDetail'>
                    <View className='examScore-studyDetail-item'>
                        <Text>{studyDetail.pass}</Text>
                        <Text>通过</Text>
                    </View>
                    <View className='examScore-studyDetail-item'>
                        <Text>{studyDetail.fail}</Text>
                        <Text>未通过</Text>
                    </View>
                    <View className='examScore-studyDetail-item'>
                        <Text>{studyDetail.unStudy}</Text>
                        <Text>未修</Text>
                    </View>
                    <View className='examScore-studyDetail-item'>
                        <Text>{studyDetail.studying}</Text>
                        <Text>在读</Text>
                    </View>
                </View>
                <View className='examScores-scores'>
                    <View className='examScores-scores-queryies'>
                        <View className='examScores-scores-picker'>
                            <Text>学年</Text>
                            <Picker
                                className='examScore-gradeQuery'
                                mode='selector'
                                range={gradeQuery}
                                onChange={e => setGradeIndex(Number(e.detail.value))}
                            >
                                {gradeQuery[gradeIndex]}
                            </Picker>
                        </View>
                        <View className='examScores-scores-picker'>
                            <Text>学期</Text>
                            <Picker
                                className='examScore-termQuery'
                                mode='selector'
                                range={termQuery}
                                onChange={e => setTermIndex(Number(e.detail.value))}
                            >
                                {termQuery[termIndex]}
                            </Picker>
                        </View>
                    </View>
                    <View className='examScores-scores-result'>
                        {
                            scores.length === 0 ?
                                <View className='examScores-scores-result-noData'>
                                    <Text>当前查询条件下暂无成绩</Text>
                                </View>
                                :
                                <>
                                    <View className='examScores-scores-result-item examScores-scores-result-headerRow'>
                                        <Text>课程名称</Text>
                                        <Text>学分</Text>
                                        <Text>成绩</Text>
                                    </View>
                                    <View className='examScores-scores-result-data'>
                                        {
                                            scores.map(item => {
                                                return (
                                                    <View className='examScores-scores-result-item'>
                                                        <Text>{item.kcmc}</Text>
                                                        <Text>{item.xf}</Text>
                                                        <Text style={{ color: parseInt(item.cj) < 60 ? '#dd001b' : '#000' }}>{item.cj}</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                </>
                        }
                    </View>
                </View>
            </View>
        </View>
    );
};
