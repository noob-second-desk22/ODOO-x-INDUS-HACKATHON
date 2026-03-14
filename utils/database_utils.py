from sqlmodel import Session,select
from models.db import Stock

def update_stock_quantity(sku: str, new_quantity: float, db: Session):
        statement = select(Stock).where(Stock.SKU == sku)
        stock_item = db.exec(statement).first()

        if not stock_item:
            return "Item not found"

        stock_item.quantity = new_quantity

        db.add(stock_item)
        db.commit()
        db.refresh(stock_item)

        return stock_item