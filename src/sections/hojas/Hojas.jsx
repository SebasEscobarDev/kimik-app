import React, { useState } from 'react';

const Hojas = () => {
    const [expandedLeaf, setExpandedLeaf] = useState(null);

    const leaves = [
        { id: 1, color: 'bg-red-500' },
        { id: 2, color: 'bg-blue-500' },
        { id: 3, color: 'bg-green-500' },
        { id: 4, color: 'bg-yellow-500' },
        { id: 5, color: 'bg-purple-500' },
    ];

    const handleLeafClick = (id) => {
        setExpandedLeaf(expandedLeaf === id ? null : id);
    };

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 flex h-[80vh]">
            {leaves.map((leaf, index) => (
                <div
                    key={leaf.id}
                    className={`transition-all duration-300 ease-in-out cursor-pointer ${leaf.color} 
            ${expandedLeaf === leaf.id ? 'w-[80vw] h-[80vh] rounded-[20px]' : 'w-32 h-full rounded-[0_20px_20px_0]'}
            ${expandedLeaf === null ? 'hover:z-10' : ''}`}
                    style={{
                        zIndex: expandedLeaf === leaf.id ? 50 : 10 - index,
                        transform: expandedLeaf === null
                            ? `translateX(${index * - 38}px)`
                            : `translate(${expandedLeaf === leaf.id ? '10vw' : '0'}, ${expandedLeaf === leaf.id ? '10vh' : '0'})`,
                        transition: 'all 0.3s ease-in-out, z-index 0s',
                    }}
                    onClick={() => handleLeafClick(leaf.id)}
                >
                    {expandedLeaf === leaf.id && (
                        <div className="p-8 text-white h-full flex flex-col justify-center items-center overflow-auto">
                            <h2 className="text-2xl font-bold mb-4">Contenido de la hoja {leaf.id}</h2>
                            <p>Aquí puedes agregar el contenido específico para cada hoja.</p>
                        </div>
                    )}
                </div>
            ))
            }
        </div >
    );
};

export default Hojas;