import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from "react-native"
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price
        })
    }
    return (
        <View backgroundColor={'#FFFFFF'} style={{flex: 1}}>
            <SearchBar
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Big Pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen
