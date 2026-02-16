import { expect, it, describe, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { Button } from './Button.tsx'

describe('Button', () => {
    it('renders the label', async () => {
        const labelText = 'Click Here'
        const { getByRole } = await render(<Button label={labelText} onClick={() => {}} />)

        await expect.element(getByRole('button')).toHaveTextContent(labelText)
    })

    it('calls onClick when clicked', async () => {
        const onClick = vi.fn()
        const { getByRole } = await render(<Button label="Click Me" onClick={onClick} />)

        await getByRole('button').click()
        expect(onClick).toHaveBeenCalled()
    })
})