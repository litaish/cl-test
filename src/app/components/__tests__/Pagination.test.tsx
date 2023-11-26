import React from 'react'
import { fireEvent, getByText, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from '../Pagination'

describe('Pagination', () => {
    it('Renders 5 page buttons when 20 items are provided with 4 items per page', () => {
        const { container } = render(
            <Pagination
                itemsSize={20}
                currentPage={2}
                pageSize={4}
                onPageChange={() => {}}
            />
        )

        const pageButtons = container.querySelectorAll('button')

        expect(pageButtons.length).toBe(5)
    })
    it('Disables current page button', () => {
        const { container } = render(
            <Pagination
                itemsSize={20}
                currentPage={3}
                pageSize={4}
                onPageChange={() => {}}
            />
        )

        const buttons = container.querySelectorAll('button')

        expect(buttons[2].disabled).toBe(true)
    })
    it('Display no buttons when all items fit in one batch', () => {
        const { container } = render(
            <Pagination
                itemsSize={4}
                currentPage={1}
                pageSize={10}
                onPageChange={() => {}}
            />
        )

        const buttons = container.querySelectorAll('button')

        expect(buttons.length).toBe(0)
    })
})
