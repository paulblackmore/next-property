import React from 'react';
import properties from '../../dummy_data/properties.json';
import { Properties } from '@/components/Properties';

const PropertiesPage = () => <Properties properties={properties} />;

export default PropertiesPage;
