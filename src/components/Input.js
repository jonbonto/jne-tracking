import React, {useState} from 'react';

export const Input = (props) => {
  const [noResi, setNoResi] = useState("");
  const checkResi = (e) => {
    e.preventDefault();
    props.checkResi(noResi);
  } 
  return (
    <>
      <div className="field columns">
        <div className="column" />
        <div className="control column">
          <input 
            value={noResi}
            onChange={e => setNoResi(e.target.value)}
            className="input is-medium" 
            type="text" 
            placeholder="No Resi" 
          />
        </div>
        <div className="column" />
      </div>
      <div className="has-text-centered">
        <a className="button is-primary" onClick={checkResi}>Cek Resi</a>
      </div>
    </>
  );
}
