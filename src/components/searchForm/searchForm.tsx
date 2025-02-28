import React from "react";

class SearchForm extends React.Component {
    render() {
        return(
            <form className="search-form">
                <input type="text" className="search-form__input" placeholder=" Faça sua busca aqui se já souber o que está procurando " name="search "/>
                <button className="search-form__button" type="submit">
                    <svg width="28 " height="28 " viewBox="0 0 28 28 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                            <path d="M0.639851 24.2648L7.18594 17.7187C5.69735 15.5088 4.9629 12.7476 5.3561 9.80546C6.02657 4.80101 10.1281 0.728433 15.1375 0.0942229C22.5854 -0.848206 28.8482 5.4146 27.9057 12.8625C27.2713 17.874 23.1982 21.9789 18.1932
                            22.6461C15.251 23.0392 12.4893 22.305 10.2799 20.8162L3.73385 27.3623C2.87963 28.2165 1.4944 28.2165 0.640177 27.3623C-0.213276 26.507 -0.213274 25.1179 0.639851 24.2648ZM23.6742 11.375C23.6742 7.51515 20.5341 4.37499 16.6742 4.37499C12.8144
                            4.37499 9.67422 7.51515 9.67422 11.375C9.67422 15.2348 12.8144 18.375 16.6742 18.375C20.5341 18.375 23.6742 15.2359 23.6742 11.375Z " fill="white "/>
                    </svg>
                </button>
            </form>
        )
    }
}

export default SearchForm;