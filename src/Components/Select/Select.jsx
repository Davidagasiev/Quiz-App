import React from 'react'
import "./Select.css";
import categories from './Categories';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';


export default function SelectParams(props) {

    return (
        <div className="Select">
{/* Select Category */}
            <FormControl>
                <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
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

{/* Select Difficulty */}
            <FormControl>
                <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
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