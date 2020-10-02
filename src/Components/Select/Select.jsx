import React from 'react'
import "./Select.css";
import categories from './Categories';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


export default function SelectParams(props) {

    function returnMenuItems() {
        let menuItems = [];
        for(let i = 1; i <= 50; i++){
            menuItems.push(
                <MenuItem key={i} value={i}>
                    { i }
                </MenuItem>
                )
        }
        return menuItems;
    }

    return (
        <div className="Select">

{/* Number of Questions */}
            <FormControl>
                <InputLabel id="Questions">Questions</InputLabel>
                <Select
                labelId="Questions"
                id="Questions"
                value={props.numberOfQuestions}
                onChange={(e) => props.setNumberOfQuestions(e.target.value)}
                >
                    {returnMenuItems().map(number => number)}
                </Select>
            </FormControl>
{/* Number of Questions */}

{/* Select Category */}
            <FormControl>
                <InputLabel id="Category">Category</InputLabel>
                <Select
                labelId="Category"
                id="Category"
                value={props.category}
                onChange={(e) => props.setCategory(e.target.value)}
                >
                {categories.map((category, index) => (
                    <MenuItem key={index + 9} value={index + 9}>
                    {category}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
{/* Select Category */}

{/* Select Type */}
            <FormControl>
                <InputLabel id="Type">Type</InputLabel>
                <Select
                    labelId="Type"
                    id="Type"
                    value={props.type}
                    onChange={(e) => props.setType(e.target.value)}
                >
                    <MenuItem value={"multiple"}>Multiple Choice</MenuItem>
                    <MenuItem value={"boolean"}>True / False</MenuItem>
                </Select>
            </FormControl>
{/* Select Type */}

{/* Select Difficulty */}
            <FormControl>
                <InputLabel id="Difficulty">Difficulty</InputLabel>
                <Select
                labelId="Difficulty"
                id="Difficulty"
                value={props.difficulty}
                onChange={(e) => props.setDifficulty(e.target.value)}
                >
                    <MenuItem value={"easy"}>Easy</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"hard"}>Hard</MenuItem>
                </Select>
            </FormControl>
{/* Select Difficulty */}
        </div>
    )
}