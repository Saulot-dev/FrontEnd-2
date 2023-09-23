import React, {Component} from 'react';
import './App.css';
/*import logo from './logo.svg';*/
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    alunos: [
      {
        nome: "Saulo",
        turma:"Programação Web",
      },
      {
        nome: "Junior",
        turma:"Análise de Algoritmos",
      },
      {
        nome: "Jonny",
        turma:"Programação OO",
      },
      {
        nome: "Lino",
        turma:"Engenharia de Software",
      },
    ]
  }

  handleSubmit = (alunoDisc) => {
    this.setState(
      {
        alunos: [...this.state.alunos, alunoDisc]
      }
    )
  }
  
  render(){
    const {alunos} = this.state
    return(
      <div className="container">
        <Table alunos = {alunos} 
            removerAluno={this.removerAluno} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }

  removerAluno = (index) => {
    const{alunos} = this.state
    this.setState(
      {
        alunos: alunos.filter((aluno, i) => {
          return i !== index
        })
      }
    )
  }
}

export default App;
