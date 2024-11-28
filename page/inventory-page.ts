import { Page, expect } from "@playwright/test";

export class InventoryPage {
    private products;
    constructor(private page: Page){
        this.products = this.page.getByText('Products');
    }

    async validar_products(){
        await expect(this.products).toBeVisible();
    }
}