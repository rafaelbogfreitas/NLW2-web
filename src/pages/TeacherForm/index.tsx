import React, { useState, FormEvent } from 'react';
import { useHistory } from "react-router-dom";
import PageHeader from '../../components/PageHeader';

import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherForm = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [cost, setCost] = useState("");
  const [subject, setSubject] = useState("");

  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: "", to: "" }])

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: ""
      }
    ]);

  }

  const setScheduleItemValue = (index: number, field: string, value: string) => {
    const newArray = scheduleItems.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [field]: value
        }
      } else {
        return item
      }

    });
    console.log(newArray);

    setScheduleItems(newArray);
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    };

    api.post("classes", body)
      .then(() => history.push("/"))
      .catch(() => alert("Erro no cadastro!"))
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <TextArea
              name="bio"
              label="Descrição"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="submit" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {
              scheduleItems.map((schedule, i) =>
                <div key={i} className="schedule-item">
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
                    onChange={event => setScheduleItemValue(i, "week_day", event.target.value)}
                    value={schedule.week_day}
                  />
                  <Input
                    type="time"
                    name="from"
                    label="from"
                    onChange={event => setScheduleItemValue(i, "from", event.target.value)}
                    value={schedule.from}
                  />
                  <Input
                    type="time"
                    name="to"
                    label="to"
                    onChange={event => setScheduleItemValue(i, "to", event.target.value)}
                    value={schedule.to}
                  />
                </div>
              )
            }

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
