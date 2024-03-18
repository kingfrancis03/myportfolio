
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skills } from '../../typings/skills'
import SkillHelper from 'jsonhelper/skillsHelper';

interface SkillsState {
    skills: Skills[]
}

const initialState: SkillsState = {
    skills: new SkillHelper().getSkills()
};

const skillsSlices = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

export default skillsSlices.reducer;
