import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formattedCartTotal = formatMoney(cartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total Items</RegularText>
        <RegularText size="s">R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Delivery</RegularText>
        <RegularText size="s">R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="Confirm order"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
