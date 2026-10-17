function searchBar({placeholder, searchQuery, setSearchQuery, searchstyle}){
  return(
    <div>
      <input type="text" 
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        style={searchstyle}
      />
    </div>
  )
}
export default searchBar