import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDoctorsApi } from '../api/doctorApi';

export const useDoctors = (params) => {
    return useQuery({
        queryKey: ['doctors', params],
        queryFn: () => getDoctorsApi(params).then((r) => r.data),
    });
};