
import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import Card from './Card';
import PropTypes from 'prop-types';

export default function VirtualList({ items, itemHeight }) {
    const parentRef = useRef();

    const rowVirtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => itemHeight,
        overscan: 5,
    });

    return (
        <div ref={parentRef}
        style={{
            height: Math.min(800, window.innerHeight * 0.75),
            overflowY: "auto",
            width: "100%",
        }}
        data-testid="virtual-list">
            <div
            style={{
                height: `${rowVirtualizer.getTotalSize}px`,
                width: "100%",
                position: "relative",
            }}>
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const item = items[virtualRow.index];
                    return (
                        <div
                        key={item.id}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: `${itemHeight}px`,
                            transform: `translateY(${virtualRow.start}px)`,
                            padding: "8px",
                        }}>
                            <Card id={item.id} title={item.title} description={item.description} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

VirtualList.propTypes = {
    items: PropTypes.array.isRequired,
    itemHeight: PropTypes.number,
};

VirtualList.defaultProps = {
    itemHeight: 110,
};
