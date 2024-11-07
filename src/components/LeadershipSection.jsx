import React from 'react';
import { FaUserMd, FaLightbulb, FaCogs } from 'react-icons/fa';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const leadershipData = [
  {
    name: 'Miss Tuba',
    title: 'Founder',
    icon: <FaUserMd />,
  },
  {
    name: 'MR Umair',
    title: 'Director',
    icon: <FaLightbulb />,
  },
  {
    name: 'Mr Nayaz',
    title: 'Co Founder',
    icon: <FaCogs />,
  },
];

const LeadershipCard = ({ name, title, icon }) => (
  <Card className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
    <Avatar className="text-6xl mb-4">{icon}</Avatar>
    <CardContent>
      <Typography variant="h5" component="h3" className="text-xl font-semibold">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" className="text-gray-500">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const LeadershipSection = () => (
  <div className="py-8">
    <Typography variant="h4" component="h2" className="text-3xl font-bold text-center mb-8">
      Meet Code Dazzle Solutions Leadership
    </Typography>
    <div className="flex justify-center space-x-8">
      {leadershipData.map((leader, index) => (
        <LeadershipCard key={index} {...leader} />
      ))}
    </div>
  </div>
);

export default LeadershipSection;
