import React from 'react';
import { Properties } from '@/components/Properties';
import { connectDB } from '@/config/database';
import Property from '@/models/Property';

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find({});
  return <Properties properties={properties} />;
};

export default PropertiesPage;
