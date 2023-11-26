import { renderHook } from '@testing-library/react'
import { useProducts } from '../useProducts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

global.fetch = jest.fn()
const queryClient = new QueryClient()

describe('useProducts', () => {
    it('Render correct initial values for data, isError and isLoading', async () => {
        const { result } = renderHook(() => useProducts(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            ),
        })
        const { data, isLoading, isError } = result.current

        expect(data).toBeFalsy()
        expect(isError).toBe(false)
        expect(isLoading).toBe(true)
    })
})
