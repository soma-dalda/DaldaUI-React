import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { List } from '../index'

export default {
  title: 'Blocks/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>

const MapListsTemplate = ({ src, title, instagram, address }) => {
  return (
    <>
      <List.Image isLoading={false} src={src} />
      <List.Column>
        <List.Title>{title}</List.Title>
        <List.Item>
          <a href="./">{instagram}</a>
        </List.Item>
        <List.Item>{address}</List.Item>
      </List.Column>
    </>
  )
}

const Template: ComponentStory<typeof List> = (args) => {
  return (
    <div
      style={{
        width: '45%',
        height: '100vh',
      }}
    >
      <List {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  width: '100%',
  height: '100px',
  children: (
    <MapListsTemplate
      address="서울특별시 삼성동 3204-2"
      instagram="instagram.com/cakepop"
      title="케이크 팝"
      src="https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw"
    />
  ),
}

export const ManyLists = Template.bind({})
ManyLists.args = {
  width: '100%',
  height: '100px',
  children: (
    <>
      <MapListsTemplate
        address="서울특별시 삼성동 3204-2"
        instagram="instagram.com/cakepop"
        title="케이크 팝"
        src="https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw"
      />
      <MapListsTemplate
        address="서울특별시 삼성동 3204-2"
        instagram="instagram.com/cakepop"
        title="케이크 팝"
        src="https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw"
      />
      <MapListsTemplate
        address="서울특별시 삼성동 3204-2"
        instagram="instagram.com/cakepop"
        title="케이크 팝"
        src="https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw"
      />
    </>
  ),
}
