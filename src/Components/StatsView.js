import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Box, Button, Message, Progress, Text } from 'theme-ui'
import { todoListStatsState } from './atoms';

const StatsView = () => {
    const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} = useRecoilValue(todoListStatsState)

    return (
        <Box>
           <Link to='/'><Button>Return</Button></Link>
           <Message>All tasks: {totalNum}</Message>
           <Message>Completed tasks: {totalCompletedNum}</Message>
           <Message>Tasks to do: {totalUncompletedNum}</Message>
           <Text>Progress bar: {percentCompleted}%</Text>
           <Progress max={100} value={percentCompleted}>{percentCompleted}%</Progress>
        </Box>
    )
}

export default StatsView