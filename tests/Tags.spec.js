import {test, expect} from '@playwright/test'

test('Test 1@sanity', async({page})=>{
    console.log('This is Test 1')
})

test('Test 2@sanity', async({page})=>{
    console.log('This is Test 2')
})

test('Test 3@reg', async({page})=>{
    console.log('This is Test 3')
})

test('Test 4@reg', async({page})=>{
    console.log('This is Test 4')
})

test('Test 5@sanity@reg', async({page})=>{
    console.log('This is Test 5')
})