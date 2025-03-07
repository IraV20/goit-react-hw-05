import css from "./SearchBox.module.css";

export default function SearchBox({onSubmit}) {

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;
        const useValue = form.elements.userValue.value.trim();

        onSubmit(useValue);
        form.reset();
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className={css.searchBox}>
                <input name="userValue" type="text" placeholder="Search movies by name"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

