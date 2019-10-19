import React from "react";
import NeonLogo from "../../components/NeonLogo"
import SearchField from "../../components/SearchField"
import SearchInput from "../../components/SearchInput"
import Filter from "../../components/Filter"

export default function Search() {
    return (
        <div>
          <NeonLogo />
          <SearchInput />
          <Filter />
          <SearchField />
        </div>
      );
    
}