import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        nome:'',
        turma:'',
        horario:'',
    }
    state = this.initialState
    
    handleChange = (event) => {
        const{name, value} = event.target

        this.setState({
            [name]: value,
        })

    }
    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState (this.initialState)
    }
    render(){
        const{nome, turma, horario} = this.state;
        return(
            <form>
                <label htmlFor="nome">Nome</label>
                <input  type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={this.handleChange} />
                <label htmlFor="turma">Turma</label>
                <input  type="text"
                        name="turma"
                        id="turma"
                        value={turma}
                        onChange={this.handleChange} />
                <label htmlFor="horario">Horario</label>
                <input  type="text"
                        name="horario"
                        id="horario"
                        value={horario}
                        onChange={this.handleChange} />
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        )
    }
}
export default Form;
