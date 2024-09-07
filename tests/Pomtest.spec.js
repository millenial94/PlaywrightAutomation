import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Pom Test', async({page})=>{
    
    //Login
    const login= new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('kunalk','test@123')

    //Homepage
    const home=new HomePage(page);
    await home.addProductToCart('Nexus 6')
    await home.gotoCart();

    //CartPage
    const cart=new CartPage(page)
    const status=await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true);

})