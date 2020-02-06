import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [individualRegistry, setIndividualRegistry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      name,
      email,
      birthDate,
      individualRegistry,
      state,
      city,
      githubUrl
    });

    history.push("/list");
  }

  return (
    <div className="container py-5">
      <h2>Form</h2>
      <div className="row">
        <div className="col-md-10">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  required
                  placeholder="Your full name here"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                  placeholder="Your email here"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="birthDate">Birthdate</label>
                <input
                  type="date"
                  className="form-control"
                  name="birthDate"
                  required
                  value={birthDate}
                  onChange={e => setBirthDate(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="individualRegistry">Individual Registry</label>
                <input
                  type="text"
                  className="form-control"
                  name="individualRegistry"
                  id="individualRegistry"
                  required
                  minLength="11"
                  maxLength="11"
                  placeholder="Your CPF here"
                  value={individualRegistry}
                  onChange={e => setIndividualRegistry(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="state">State</label>
                <select
                  id="state"
                  className="form-control"
                  name="state"
                  value={state}
                  onChange={e => setState(e.target.value)}
                >
                  <option value="">Select your state</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="Your city here"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="githubUrl">Github URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="githubUrl"
                  id="githubUrl"
                  placeholder="Your Github URL here"
                  required
                  value={githubUrl}
                  onChange={e => setGithubUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
