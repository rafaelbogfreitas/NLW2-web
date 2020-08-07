import React from 'react';

import PageHeader from "../../components/PageHeader";


import "./styles.css";
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers">
        <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label:"Artes" },
              { value: "Biologia", label:"Biologia" },
              { value: "Ciências", label:"Ciências" },
              { value: "Matemática", label:"Matemática" },
              { value: "Física", label:"Física" },
              { value: "Português", label:"Português" },
              { value: "Química", label:"Química" }
            ]}
          />
          <Input name="week_day" label="Dia da semana" />
          <Input name="time" label="Hora" type="time"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;
