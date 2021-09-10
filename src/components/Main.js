import React, { Component } from 'react';

// Vai para o Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state ={
    novoAluno: '',
    alunos: [
    ],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { alunos } = this.state;
    let{ novoAluno } = this.state;
    novoAluno = novoAluno.trim();
    if (alunos.indexOf(novoAluno) !== -1) return;

    const novosAlunos = [...alunos];
    this.setState({
      alunos: [...novosAlunos, novoAluno],
    });
  }

  handleChange = (e) => {
    this.setState({
      novoAluno: e.target.value,
    });
  }

  render() {
    const { novoAluno, alunos } = this.state;
    return (
      <div className="main">
        <h1> Lista de Alunos</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">

          <input onChange={this.handleChange} type="text" value={novoAluno} />

          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="alunos">
          {alunos.map((aluno) => (
            <li key={aluno}>
              {aluno}

              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}

        </ul>
      </div>
    );
  }
}

export default Main;
