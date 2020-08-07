import React, { useState, FormEvent } from 'react';

import PageHeader from "../../components/PageHeader";


import "./styles.css";
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  interface TeacherItemProps {
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    cost: number;
    id: number;
    whatsapp: string;
  }

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const params = {
      subject,
      week_day,
      time
    }

    const response = await api.get("classes", {
      params
    });

    setTeachers(response.data);
    
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Matemática", label: "Matemática" },
              { value: "Física", label: "Física" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" }
            ]}
            onChange={e => setSubject(e.target.value)}
            value={subject}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" }
            ]}
            onChange={e => setWeekDay(e.target.value)}
            value={week_day}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            onChange={e => setTime(e.target.value)}
            value={time}
          />

          <button type="submit" onClick={searchTeachers}>
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map( (teacher: TeacherItemProps) => <TeacherItem key={teacher.id} {...teacher}/>)
        }
      </main>
    </div>
  )
}

export default TeacherList;
