import SearchResults from './SearchResults/SearchResults';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

function App() {

    var searchResults = [{ title: "Consilio GmbH", description: "Eine Beschreibung.", boost: 0.526, url: "https://www.google.com" }, { title: "Wiewald", description: "Eine Beschreibung.", boost: 0.481, url: "https://www.google.com" }]

    return (
        <div className='Container vh-100 mx-auto'>
            <div className='d-flex vh-100 flex-column align-items-center justify-content-center'>
                <div className='col-4 mb-1'>
                    <h1 className='text-center'>Searchr</h1>
                </div>
                <div className='col-5 mb-3'>
                    <div className='input-group'>
                        <input className='form-control form-control-lg' placeholder='Bitte gib deinen Suchbegriff ein.' />
                        <button className='btn btn-primary'>Finden</button>
                    </div>
                </div>

                <div className='col-5'>
                    <ul className="list-group">
                        <SearchResults data={searchResults} />
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default App;