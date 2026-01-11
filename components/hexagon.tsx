import React from "react";
import Link from "next/link";
import { hexagonData } from "@/data";

// Tipos para los datos del hexágono
interface HexagonData {
  id: number | string;
  name: string;
  backgroundImage: string;
  link: string;
}

interface HexagonProps {
  data: HexagonData;
  className?: string;
}

// CONFIGURACIÓN DE TAMAÑO DEL HEXÁGONO
const hexSize = {
  width: 128*1.4,  // Ancho en pixels (también cambia w-32 abajo)
  height: 144*1.4, // Alto en pixels (también cambia h-36 abajo)
};
// Componente Hexagon que recibe data
function Hexagon({ data, className = "" }: HexagonProps) {
  
  return (
    <Link href={data.link}>
      <div
        className={`
          relative
          ${className}
        `}
        style={{
          width: `${hexSize.width}px`,
          height: `${hexSize.height}px`,
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center relative group"
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#A6A6A6] bg-opacity-90 group-hover:bg-opacity-20 transition-all duration-300" />
          
          {/* Nombre */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-sm text-center px-2 relative z-10">
              {data.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Grilla hexagonal configurable
export default function HexagonalGrid() {
  // Define qué hexágonos se muestran (true = visible, false = oculto)
  const gridConfig = {
    row1: [false, true, false, false, false, true],
    row2: [true, false, false, false, true, false],
    row3: [true, false, false, false, false, true],
    row4: [false, false, false, false, true, false],
  };

  const hexWidth = hexSize.width;
  const hexHeight = hexSize.height;
  const gap = 20;
  
  const horizontalSpacing = hexWidth + gap;
  const verticalSpacing = hexHeight * 0.75 + gap;
  const rowOffset = (hexWidth + gap) / 2;

  // Tipos para la estructura de la grilla
  interface HexagonInRow {
    data: HexagonData;
    colIndex: number;
  }

  interface RowData {
    rowIndex: number;
    isOffsetRow: boolean;
    hexagons: HexagonInRow[];
  }

  // Función para mapear los datos a los hexágonos visibles
  const getVisibleHexagons = (): RowData[] => {
    let dataIndex = 0;
    const result: RowData[] = [];
    
    Object.entries(gridConfig).forEach(([rowKey, rowConfig], rowIndex) => {
      const isOffsetRow = rowIndex % 2 === 1;
      const rowData: HexagonInRow[] = [];
      
      rowConfig.forEach((show, colIndex) => {
        if (show && dataIndex < hexagonData.length) {
          rowData.push({
            data: hexagonData[dataIndex],
            colIndex,
          });
          dataIndex++;
        } else if (show) {
          // Si no hay más datos, usar placeholder
          rowData.push({
            data: {
              id: `placeholder-${dataIndex}`,
              name: "Coming Soon",
              backgroundImage: "/fungi1.jpg",
              link: "#",
            },
            colIndex,
          });
          dataIndex++;
        }
      });
      
      if (rowData.length > 0) {
        result.push({
          rowIndex,
          isOffsetRow,
          hexagons: rowData,
        });
      }
    });
    
    return result;
  };

  const visibleRows = getVisibleHexagons();

  // Calcular dimensiones reales de la grilla
  const maxCols = Math.max(...Object.values(gridConfig).map(row => 
    row.reduce((sum, val, idx) => val ? idx + 1 : sum, 0)
  ));
  const totalRows = Object.keys(gridConfig).length;
  
  // Ancho: (columnas - 1) * spacing + ancho del hexágono + offset para filas impares
  const gridWidth = (maxCols - 1) * horizontalSpacing + hexWidth + rowOffset;
  const gridHeight = (totalRows - 1) * verticalSpacing + hexHeight;

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      {/* Contenedor que se ajusta al tamaño real de la grilla */}
      <div className="relative" style={{ width: `${gridWidth}px`, height: `${gridHeight}px` }}>
        
          {visibleRows.map((row) => (
            <div 
              key={`row-${row.rowIndex}`}
              className="absolute flex" 
              style={{ 
                top: `${row.rowIndex * verticalSpacing}px`, 
                left: row.isOffsetRow ? `${rowOffset}px` : '0px'
              }}
              >
              {row.hexagons.map((hex) => (
                <div 
                  key={hex.data.id} 
                  style={{ 
                    position: 'absolute',
                    left: `${hex.colIndex * horizontalSpacing}px`
                  }}
                >
                  <Hexagon data={hex.data} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}