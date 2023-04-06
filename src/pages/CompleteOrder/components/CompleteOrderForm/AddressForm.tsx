import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <div className="row">
        <Input
          placeholder="Pin Code"
          type="number"
          className="cep"
          {...register('cep')}
          error={errors.cep?.message}
        />
      </div>
      <div className="row">
        <Input
          placeholder="Street"
          className="street"
          {...register('street')}
          error={errors.street?.message}
        />
      </div>
      <div className="row">
        <Input
          type="number"
          placeholder="Phone Number"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complement"
          className="complement"
          {...register('complement')}
          error={errors.complement?.message}
          rightText="Opcional"
        />
      </div>
      <div className="row">
        <Input
          placeholder="District"
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          placeholder="City"
          className="city"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder="State"
          className="uf"
          {...register('uf')}
          error={errors.uf?.message}
        />
      </div>
    </AddressFormContainer>
  )
}
