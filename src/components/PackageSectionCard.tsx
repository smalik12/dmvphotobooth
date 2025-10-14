import React, { JSX } from 'react';
import { Typography } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import { shadowsFont } from '@/theme';

interface IPackageSectionCardProps {
  title: string;
  items: string[];
  icon: JSX.Element;
  color: string;
}

export default function PackageSectionCard({
  title,
  items,
  icon,
  color,
}: IPackageSectionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div
        className="flex items-center justify-center mb-4 text-3xl"
        style={{ color }}
      >
        {icon}
      </div>
      <Typography
        variant="h5"
        gutterBottom
        fontWeight="bold"
        className="text-center font-semibold text-gray-800"
        fontFamily={shadowsFont.style.fontFamily}
      >
        {title}
      </Typography>
      <ul className="space-y-2 mt-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <FaCheckCircle className="text-[#004aad] mr-2" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
