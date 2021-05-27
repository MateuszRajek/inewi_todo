import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Box, Button, Message, Progress, Text } from 'theme-ui'
import { todoListStatsState } from './atoms';

const StatsView = () => {
    const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} = useRecoilValue(todoListStatsState)

    return (
        <Box sx={{maxWidth: '90%', margin: '0 auto'}}>
           <Link to='/main'>
                <Button sx={{backgroundColor: '#a8a8a8', ':hover': 
                    {backgroundColor: 'white', color: '#a8a8a8', boxShadow: '0 0 3px #a8a8a8'}}}>Go Back
                </Button>
           </Link>
           <Message sx={{margin: '10px 0', backgroundColor: '#e89e9e', fontWeight: '600', textTransform: 'Uppercase'}}>All tasks: {totalNum}</Message>
           <Message sx={{margin: '10px 0', backgroundColor: '#e89e9e', fontWeight: '600', textTransform: 'Uppercase'}}>Completed tasks: {totalCompletedNum}</Message>
           <Message sx={{margin: '10px 0', backgroundColor: '#e89e9e', fontWeight: '600', textTransform: 'Uppercase'}}>Tasks to do: {totalUncompletedNum}</Message>
           <Text>Progress bar: {percentCompleted.toFixed(2)}%</Text>
           <Progress max={100} value={percentCompleted}>{percentCompleted}%</Progress>
        </Box>
    )
}

export default StatsView