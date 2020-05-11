import React from 'react';
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className='App'>
      <div>
        <span className='nes-text is-primary'>Primary</span>
        <span className='nes-text is-success'>Success</span>
        <span className='nes-text is-warning'>Warning</span>
        <span className='nes-text is-error'>Error</span>
        <span className='nes-text is-disabled'>Disabled</span>
      </div>
      <div>
        <a className='nes-btn' href='#'>
          Normal
        </a>

        <button type='button' className='nes-btn is-primary'>
          Primary
        </button>
        <button type='button' className='nes-btn is-success'>
          Success
        </button>
        <button type='button' className='nes-btn is-warning'>
          Warning
        </button>
        <button type='button' className='nes-btn is-error'>
          Error
        </button>
        <button type='button' className='nes-btn is-disabled'>
          Disabled
        </button>

        <label className='nes-btn'>
          <span>Select your file</span>
          <input type='file' />
        </label>
      </div>
      <div>
        <label>
          <input type='radio' className='nes-radio' name='answer' checked />
          <span>Yes</span>
        </label>

        <label>
          <input type='radio' className='nes-radio' name='answer' />
          <span>No</span>
        </label>

        <div style={{ 'background-color': '#212529', padding: '1rem 0' }}>
          <label>
            <input type='radio' className='nes-radio is-dark' name='answer-dark' checked />
            <span>Yes</span>
          </label>

          <label>
            <input type='radio' className='nes-radio is-dark' name='answer-dark' />
            <span>No</span>
          </label>
        </div>
      </div>

      <div>
        <label>
          <input type='checkbox' className='nes-checkbox' checked />
          <span>Enable</span>
        </label>

        <div style={{ 'background-color': '#212529', padding: '1rem 0' }}>
          <label>
            <input type='checkbox' className='nes-checkbox is-dark' checked />
            <span>Dark</span>
          </label>
        </div>
      </div>

      <div>
        <div className='nes-field'>
          <label for='name_field'>Your name</label>
          <input type='text' id='name_field' className='nes-input' />
        </div>

        <div className='nes-field is-inline'>
          <label for='inline_field'>.input.is-success</label>
          <input
            type='text'
            id='inline_field'
            className='nes-input is-success'
            placeholder='NES.css'
          />
        </div>

        <div className='nes-field is-inline'>
          <label for='warning_field'>.input.is-warning</label>
          <input
            type='text'
            id='warning_field'
            className='nes-input is-warning'
            placeholder='8bit.css'
          />
        </div>

        <div className='nes-field is-inline'>
          <label for='error_field'>.input.is-error</label>
          <input
            type='text'
            id='error_field'
            className='nes-input is-error'
            placeholder='awesome.css'
          />
        </div>

        <div
          style={{ 'background-color': '#212529', padding: '1rem' }}
          className='nes-field is-inline'>
          <label for='dark_field' style={{ color: '#fff' }}>
            .input.is-dark
          </label>
          <input type='text' id='dark_field' className='nes-input is-dark' placeholder='dark.css' />
        </div>
      </div>

      <div>
        <label for='textarea_field'>Textarea</label>
        <textarea id='textarea_field' className='nes-textarea'></textarea>
      </div>

      <div>
        <label for='default_select'>Default select</label>
        <div className='nes-select'>
          <select required id='default_select'>
            <option value='' disabled selected hidden>
              Select...
            </option>
            <option value='0'>To be</option>
            <option value='1'>Not to be</option>
          </select>
        </div>

        <label for='success_select'>nes-select.is-success</label>
        <div className='nes-select is-success'>
          <select required id='success_select'>
            <option value='' disabled selected hidden>
              Select...
            </option>
            <option value='0'>To be</option>
            <option value='1'>Not to be</option>
          </select>
        </div>

        <label for='warning_select'>nes-select.is-warning</label>
        <div className='nes-select is-warning'>
          <select required id='warning_select'>
            <option value='' disabled selected hidden>
              Select...
            </option>
            <option value='0'>To be</option>
            <option value='1'>Not to be</option>
          </select>
        </div>

        <label for='error_select'>nes-select.is-error</label>
        <div className='nes-select is-error'>
          <select required id='error_select'>
            <option value='' disabled selected hidden>
              Select...
            </option>
            <option value='0'>To be</option>
            <option value='1'>Not to be</option>
          </select>
        </div>

        <div
          style={{
            'background-color': '#212529',
            padding: '1rem 1.2rem 1rem 1rem',
            width: 'calc(100% + 8px)',
          }}>
          <label for='dark_select' style={{ color: '#fff' }}>
            nes-select.is-dark
          </label>
          <div className='nes-select is-dark'>
            <select required id='dark_select'>
              <option value='' disabled selected hidden>
                Select...
              </option>
              <option value='0'>To be</option>
              <option value='1'>Not to be</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div className='nes-container with-title is-centered'>
          <p className='title'>Container.is-centered</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>

        <div className='nes-container is-dark with-title'>
          <p className='title'>Container.is-dark</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>

        <div className='nes-container is-rounded'>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>

        <div className='nes-container is-rounded is-dark'>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
      </div>

      <div>
        <section>
          <button
            type='button'
            className='nes-btn is-primary'
            onclick="document.getElementById('dialog-default').showModal();">
            Open dialog
          </button>
          <dialog className='nes-dialog' id='dialog-default'>
            <form method='dialog'>
              <p className='title'>Dialog</p>
              <p>Alert: this is a dialog.</p>
              <menu className='dialog-menu'>
                <button className='nes-btn'>Cancel</button>
                <button className='nes-btn is-primary'>Confirm</button>
              </menu>
            </form>
          </dialog>
        </section>

        <section>
          <button
            type='button'
            className='nes-btn is-primary'
            onclick="document.getElementById('dialog-dark').showModal();">
            Open dark dialog
          </button>
          <dialog className='nes-dialog is-dark' id='dialog-dark'>
            <form method='dialog'>
              <p className='title'>Dark dialog</p>
              <p>Alert: this is a dialog.</p>
              <menu className='dialog-menu'>
                <button className='nes-btn'>Cancel</button>
                <button className='nes-btn is-primary'>Confirm</button>
              </menu>
            </form>
          </dialog>
        </section>

        <section>
          <button
            type='button'
            className='nes-btn is-primary'
            onclick="document.getElementById('dialog-rounded').showModal();">
            Open rounded dialog
          </button>
          <dialog className='nes-dialog is-rounded' id='dialog-rounded'>
            <form method='dialog'>
              <p className='title'>Rounded dialog</p>
              <p>Alert: this is a dialog.</p>
              <menu className='dialog-menu'>
                <button className='nes-btn'>Cancel</button>
                <button className='nes-btn is-primary'>Confirm</button>
              </menu>
            </form>
          </dialog>
        </section>

        <section>
          <button
            type='button'
            className='nes-btn is-primary'
            onclick="document.getElementById('dialog-dark-rounded').showModal();">
            Open dark and rounded dialog
          </button>
          <dialog className='nes-dialog is-dark is-rounded' id='dialog-dark-rounded'>
            <form method='dialog'>
              <p className='title'>Dark and Rounded dialog</p>
              <p>Alert: this is a dialog.</p>
              <menu className='dialog-menu'>
                <button className='nes-btn'>Cancel</button>
                <button className='nes-btn is-primary'>Confirm</button>
              </menu>
            </form>
          </dialog>
        </section>
      </div>

      <div>
        <div className='lists'>
          <ul className='nes-list is-disc'>
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </ul>
        </div>

        <div className='lists'>
          <ul className='nes-list is-circle'>
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </ul>
        </div>
      </div>

      <div>
        <div className='nes-table-responsive'>
          <table className='nes-table is-bordered is-centered'>
            <thead>
              <tr>
                <th>Table.is-bordered</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='nes-table-responsive'>
          <table className='nes-table is-bordered is-dark'>
            <thead>
              <tr>
                <th>Table.is-dark</th>
                <th>Table.is-bordered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternon</td>
              </tr>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <progress className='nes-progress' value='90' max='100'></progress>
        <progress className='nes-progress is-primary' value='80' max='100'></progress>
        <progress className='nes-progress is-success' value='50' max='100'></progress>
        <progress className='nes-progress is-warning' value='30' max='100'></progress>
        <progress className='nes-progress is-error' value='10' max='100'></progress>
        <progress className='nes-progress is-pattern' value='50' max='100'></progress>
      </div>

      <div>
        <img
          className='nes-avatar'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />

        <img
          className='nes-avatar is-small'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />
        <img
          className='nes-avatar is-medium'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />
        <img
          className='nes-avatar is-large'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />

        <img
          className='nes-avatar is-rounded'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />

        <img
          className='nes-avatar is-rounded is-small'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />
        <img
          className='nes-avatar is-rounded is-medium'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />
        <img
          className='nes-avatar is-rounded is-large'
          alt='Gravatar image example'
          src='https://www.gravatar.com/avatar?s=15'
          style={{ 'image-rendering': 'pixelated' }}
        />
      </div>

      <div>
        <section className='nes-container'>
          <section className='message-list'>
            <section className='message -left'>
              <i className='nes-bcrikko'></i>
              <div className='nes-balloon from-left'>
                <p>Hello NES.css</p>
              </div>
            </section>

            <section className='message -right'>
              <div className='nes-balloon from-right'>
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
              </div>
              <i className='nes-bcrikko'></i>
            </section>
          </section>
        </section>

        <section className='nes-container is-dark'>
          <section className='message-list'>
            <section className='message -left'>
              <i className='nes-bcrikko'></i>
              <div className='nes-balloon from-left is-dark'>
                <p>Hello NES.css</p>
              </div>
            </section>

            <section className='message -right'>
              <div className='nes-balloon from-right is-dark'>
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
              </div>
              <i className='nes-bcrikko'></i>
            </section>
          </section>
        </section>
      </div>

      <div>
        <p className='nes-balloon from-left nes-pointer'>
          This is not a clickable element, but it's an area of the pointer.
        </p>
      </div>

      <div>
        <a href='#' className='nes-badge'>
          <span className='is-dark'>NES.css</span>
        </a>

        <a href='#' className='nes-badge'>
          <span className='is-primary'>is</span>
        </a>

        <a href='#' className='nes-badge'>
          <span className='is-success'>a</span>
        </a>

        <a href='#' className='nes-badge'>
          <span className='is-warning'>great</span>
        </a>

        <a href='#' className='nes-badge'>
          <span className='is-error'>framework!</span>
        </a>

        <a href='#' className='nes-badge is-splited'>
          <span className='is-dark'>npm</span>
          <span className='is-primary'>1.1.0</span>
        </a>

        <a href='#' className='nes-badge is-splited'>
          <span className='is-dark'>test</span>
          <span className='is-success'>100%</span>
        </a>

        <a href='#' className='nes-badge is-icon'>
          <span className='is-warning'>
            <i className='nes-icon star is-small'></i>
          </span>
          <span className='is-primary'>Icons</span>
        </a>

        <a href='#' className='nes-badge is-icon'>
          <span className='is-dark'>hi</span>
          <span className='is-warning'>Text</span>
        </a>
      </div>

      <div>
        <section className='icon-list'>
          <i className='nes-icon is-large heart'></i>
          <i className='nes-icon is-large is-half heart'></i>
          <i className='nes-icon is-large is-transparent heart'></i>
          <i className='nes-icon is-large heart is-empty'></i>

          <i className='nes-icon is-large star'></i>
          <i className='nes-icon is-large star is-half'></i>
          <i className='nes-icon is-large star is-transparent'></i>
          <i className='nes-icon is-large star is-empty'></i>

          <i className='nes-icon is-large like'></i>
          <i className='nes-icon is-large like is-empty'></i>
        </section>
      </div>

      <div>
        <section className='icon-list'>
          <i className='nes-icon twitter is-large'></i>

          <i className='nes-icon facebook is-large'></i>

          <i className='nes-icon instagram is-large'></i>

          <i className='nes-icon github is-large'></i>

          <i className='nes-icon google is-large'></i>

          <i className='nes-icon gmail is-large'></i>

          <i className='nes-icon medium is-large'></i>

          <i className='nes-icon linkedin is-large'></i>

          <i className='nes-icon twitch is-large'></i>

          <i className='nes-icon youtube is-large'></i>

          <i className='nes-icon reddit is-large'></i>

          <i className='nes-icon whatsapp is-large'></i>
        </section>
      </div>

      <div>
        <section className='icon-list'>
          <i className='nes-icon close is-large'></i>

          <i className='nes-icon trophy is-large'></i>

          <i className='nes-icon coin is-large'></i>
        </section>
      </div>

      <div>
        <section className='icon-list'>
          <i className='nes-logo'></i>
          <i className='nes-jp-logo'></i>
          <i className='snes-logo'></i>
          <i className='snes-jp-logo'></i>

          <i className='nes-octocat animate'></i>

          <i className='nes-smartphone'></i>
          <i className='nes-phone'></i>
        </section>
      </div>

      <div>
        <section className='icon-list'>
          <i className='nes-mario'></i>
          <i className='nes-ash'></i>
          <i className='nes-pokeball'></i>
          <i className='nes-bulbasaur'></i>
          <i className='nes-charmander'></i>
          <i className='nes-squirtle'></i>
          <i className='nes-kirby'></i>
        </section>
      </div>
    </div>
  );
}

export default App;
