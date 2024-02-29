import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import DropdownV2 from '../components/Dropdown';
import { salariesMock } from '@/data/salariesMock';
import '../public/globals.css'

const SalariesPage = () => {
  const [initialSalaries, setInitialSalaries] = useState(salariesMock);
  const [filters, setFilters] = useState({
    position: '',
    currency: '',
    seniority: '',
  });

  const handleFilterChange = (e: any) => {
    console.log('e.target.value', e.target.value);
    console.log('e.target.name', e.target.name);
    const { name, value } = e.target;
    console.log('filters: ', filters)
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const filteredSalaries = initialSalaries.filter(salary => {
    return (filters.position === "" || salary.position === filters.position) &&
           (filters.currency === "" || salary.currency === filters.currency) &&
           (filters.seniority === "" || salary.seniority === filters.seniority);
  });
  

  const positions = [...new Set(initialSalaries.map((salary: any) => salary.position))];
  const currencies = [...new Set(initialSalaries.map((salary: any) => salary.currency))];
  const seniorities = [...new Set(initialSalaries.map((salary: any) => salary.seniority))];

  return (
    <div className={'container'}>
      <h1>Salaries</h1>
      <DropdownV2 options={positions} onChange={handleFilterChange} name={'position'}/>
      <DropdownV2 options={currencies} onChange={handleFilterChange}  name={'currency'}/>
      <DropdownV2 options={seniorities} onChange={handleFilterChange}  name={'seniority'}/>
      <Table salaries={filteredSalaries} />
    </div>
  );
};

export default SalariesPage;