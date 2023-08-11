import { useSearchParams } from "react-router-dom";



function PostFilter (props) {
    const [searchParamas, setSearchParams] = useSearchParams();
    
    const submitHandle = (e) => {
        e.preventDefault();
        const searchQuery = e.target.searchQuery.value;
        setSearchParams({search: searchQuery});
    }

    return (
        <div className="PostFilter">
            <form onSubmit={submitHandle}>
                <input type="text" name="searchQuery"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
};


export default PostFilter