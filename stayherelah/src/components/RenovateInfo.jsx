import { display } from "@mui/system";
import React from "react";
import { FaBorderNone } from "react-icons/fa";
import styled from "styled-components";

const RenoBox = styled.div`
  height: 100%;
  width: 35%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 90%;
  width: 90%;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #ffe7cc;

  ::-webkit-scrollbar {
    height: 10px;
    width: 0px;
    border: 1px solid grey;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
    background: #b0b0b0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: hsl(0, 0%, 60%);
  }
`;

const TableContent = styled.table`
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border: 1px solid black;
`;

const Th = styled.th`
  border: 1px solid black;
`;

const Thead = styled.thead`
  border: 1px solid black;
`;

const Tbody = styled.tbody`
  border: 1px solid black;
`;

const Td = styled.td`
  border: 1px solid black;
  padding: 1rem;
`;

const RenovationInfo = () => {
  return (
    <RenoBox>
      <Wrapper>
        <TableContent>
          <Thead>
            <TableRow class="row-1 odd">
              <Th class="column-1">&nbsp;</Th>
              <Th class="column-2">Light</Th>
              <Th class="column-3">Moderate</Th>
              <Th class="column-4">Extensive</Th>
            </TableRow>
          </Thead>
          <Tbody class="row-hover">
            <TableRow>
              <Td colspan="4" class="column-1">
                <strong>LIVING ROOM / DINING</strong>
              </Td>
            </TableRow>
            <TableRow class="row-3 odd">
              <Td rowspan="2" class="column-1">
                Hacking of walls
              </Td>
              <Td class="column-2">
                3R, 4R: $100 - $400<br></br>
                5R: $600 - $900
              </Td>
              <Td class="column-3">
                3R, 4R: $400 - $700<br></br>
                5R: $900 - $1,200<br></br>
              </Td>
              <Td class="column-4">
                3R, 4R: $700 - $3,900<br></br>
                5R: $1,200 - $4,300
              </Td>
            </TableRow>
            <TableRow class="row-4 even">
              <Td class="column-2">
                Dismantling of one fixture such as cabinet, TV console without
                hacking of walls and/or floors
              </Td>
              <Td class="column-3">
                Dismantling of several fixtures with partial hacking of walls
                and/or floors
              </Td>
              <Td class="column-4">
                Dismantling of all fixtures with complete hacking of walls
                and/or floors
              </Td>
            </TableRow>
            <TableRow class="row-5 odd">
              <Td rowspan="2" class="column-1">
                Carpentry
              </Td>
              <Td class="column-2">
                3R, 4R: $200 - $3,400<br></br>
                5R: $700 - $3,900
              </Td>
              <Td class="column-3">
                3R, 4R: $3,400 - $6,200<br></br>
                5R: $3,900 - $6,700
              </Td>
              <Td class="column-4">
                3R, 4R: $6,200 - $23,700<br></br>
                5R: $6,700 - $24,100<br></br>
              </Td>
            </TableRow>
            <TableRow class="row-6 even">
              <Td class="column-2">
                Basic renovation of 1-2 home fixtures such as TV consoles,
                feature walls, cabinetry, bar counter &amp; shelves
              </Td>
              <Td class="column-3">
                Regular renovation of 2-3 home fixtures including TV consoles,
                feature walls, cabinetry, bar counter &amp; shelves
              </Td>
              <Td class="column-4">
                Extensive renovation of 3 or more home fixtures including TV
                consoles, feature walls, cabinetry, bar counter &amp; shelves
              </Td>
            </TableRow>
            <TableRow class="row-7 odd">
              <Td rowspan="2" class="column-1">
                Masonry
              </Td>
              <Td class="column-2">
                3R, 4R: $100 - $1,300<br></br>
                5R: $600 - $1,800
              </Td>
              <Td class="column-3">
                3R, 4R: $1,300 - $2,900<br></br>
                5R: $1,800 - $3,400
              </Td>
              <Td class="column-4">
                3R, 4R: $2,900 - $22,000<br></br>
                5R: $3,400 - $22,500
              </Td>
            </TableRow>
            <TableRow class="row-8 even">
              <Td class="column-2">
                Basic construction of appliance/cabinetry bases and post-hacking
                touch-up, with little to no tiling
              </Td>
              <Td class="column-3">
                Regular construction of appliance/cabinetry bases and
                post-hacking touch-up with tiling
              </Td>
              <Td class="column-4">
                Comprehensive construction of appliance/cabinetry bases and
                post-hacking touch-up with tiling
              </Td>
            </TableRow>
            <TableRow class="row-9 odd">
              <Td rowspan="2" class="column-1">
                Ceiling &amp; Partition
              </Td>
              <Td class="column-2">
                3R, 4R: $200 - $800<br></br>
                5R: $700 - $1,300
              </Td>
              <Td class="column-3">
                3R, 4R: $800 - $1,200<br></br>
                5R: $1,300 - $1,700
              </Td>
              <Td class="column-4">
                3R, 4R: $1,200 - $3,200<br></br>
                5R: $1,700-$3,700
              </Td>
            </TableRow>
            <TableRow class="row-10 even">
              <Td class="column-2">
                Basic renovation of home fixtures, including box ups, partition
                beams/walls, pelmets, and false ceilings w/ lighting
              </Td>
              <Td class="column-3">
                Regular renovation of home fixtures, including box ups, partial
                partition walls, pelmets, and partial L-box false ceilings w/
                lighting.
              </Td>
              <Td class="column-4">
                Comprehensive renovation of home fixtures, including box ups,
                full partition walls, pelmets, and full L-box false ceilings w/
                lighting.
              </Td>
            </TableRow>
            <TableRow class="row-11 odd">
              <Td class="column-1">
                <strong>Sub-total</strong>
              </Td>
              <Td class="column-2">
                3R, 4R: $600 - $5,900<br></br>
                5R: $2,600 - $7,900<br></br>
              </Td>
              <Td class="column-3">
                3R, 4R: $5,900 - $11,000<br></br>
                5R: $7,900 - $13,000{" "}
              </Td>
              <Td class="column-4">
                3R, 4R: $11,000 - $52,800<br></br>
                5R: $13,000 - $54,600
              </Td>
            </TableRow>
            <TableRow class="row-12 even">
              <Td colspan="4" class="column-1">
                <strong>KITCHEN</strong>
              </Td>
            </TableRow>
            <TableRow class="row-13 odd">
              <Td rowspan="2" class="column-1">
                Hacking
              </Td>
              <Td class="column-2">
                3R, 4R: $100 - $500<br></br>
                5R: $600 - $1,000
              </Td>
              <Td class="column-3">
                3R, 4R: $500 - $900<br></br>
                5R: $1,000 - $1,400
              </Td>
              <Td class="column-4">
                3R, 4R: $900 - $3,200<br></br>
                5R: $1,400 - $3,700
              </Td>
            </TableRow>
            <TableRow class="row-14 even">
              <Td class="column-2">
                Dismantling of one fixture, such as a cabinet, door, window, or
                cooker hob without hacking of walls and/or floors.
              </Td>
              <Td class="column-3">
                Dismantling of several fixtures, such as cabinets, doors,
                windows, or cooker hob with partial hacking of walls and/or
                floors.
              </Td>
              <Td class="column-4">
                Dismantling of all fixtures such as cabinets, doors, windows, or
                cooker hob with complete hacking of walls and/or floors.
              </Td>
            </TableRow>
            <TableRow class="row-15 odd">
              <Td rowspan="2" class="column-1">
                Carpentry
              </Td>
              <Td class="column-2">
                3R, 4R: $100 - $4,300<br></br>
                5R: $600 - $4,800
              </Td>
              <Td class="column-3">
                3R, 4R: $4,300-$6,900<br></br>
                5R: $4,800 - $7,400
              </Td>
              <Td class="column-4">
                3R, 4R: $6,900 - $17,900<br></br>
                5R: $7,400 - $18,400
              </Td>
            </TableRow>
            <TableRow class="row-16 even">
              <Td class="column-2">
                Basic renovation of home fixtures, including worktops and one
                cabinet using laminates.
              </Td>
              <Td class="column-3">
                Regular renovation of home fixtures, including worktops and up
                to 2 cabinets using laminates
              </Td>
              <Td class="column-4">
                Comprehensive renovation of home fixtures, including worktops
                and 3 or more cabinets using high-grade laminates
              </Td>
            </TableRow>
            <TableRow class="row-17 odd">
              <Td rowspan="2" class="column-1">
                Masonry
              </Td>
              <Td class="column-2">
                3R, 4R: $200 - $1,300<br></br>
                5R: $700 - $1,800
              </Td>
              <Td class="column-3">
                3R, 4R: $1,300 - $3,900<br></br>
                5R: $1,800 - $4,300
              </Td>
              <Td class="column-4">
                3R, 4R: $3,900 - $11,300<br></br>
                5R: $4,300 - $11,800
              </Td>
            </TableRow>
            <TableRow class="row-18 even">
              <Td class="column-2">
                Basic construction of appliance/cabinetry bases and post-hacking
                touch-up, with little to no tiling.
              </Td>
              <Td class="column-3">
                Regular construction of appliance/cabinetry bases, post-hacking
                touch-up, waterproofing and tiling.
              </Td>
              <Td class="column-4">
                Comprehensive construction of appliance/cabinetry bases,
                post-hacking touch-up, waterproofing and tiling.
              </Td>
            </TableRow>
            <TableRow class="row-19 odd">
              <Td rowspan="2" class="column-1">
                Plumbing
              </Td>
              <Td class="column-2">
                3R, 4R: $100 - $200<br></br>
                5R: $600 - $700
              </Td>
              <Td class="column-3">
                3R, 4R: $200 - $500<br></br>
                5R:$700 - $1,000
              </Td>
              <Td class="column-4">
                3R, 4R: $500 - $1,700<br></br>
                5R: 1,000 - $2,200
              </Td>
            </TableRow>
            <TableRow class="row-20 even">
              <Td class="column-2">
                Renovating one water fixture - kitchen sink/tap, water
                filtration systems, piping and heater storage.
              </Td>
              <Td class="column-3">
                Renovating 2-3 water fixtures - kitchen sink/taps, water
                filtration systems, piping and heater storage.
              </Td>
              <Td class="column-4">
                Renovating 3 or more water fixtures - kitchen sink/taps, water
                filtration system, piping and heater storage. Plus, extension
                and concealing works for pipes.
              </Td>
            </TableRow>
            <TableRow class="row-21 odd">
              <Td class="column-1">
                <strong>Sub-total</strong>
              </Td>
              <Td class="column-2">
                3R, 4R: $500 - $6,300<br></br>
                5R: $2,600 - $8,300
              </Td>
              <Td class="column-3">
                3R, 4R: $6,100 - $11,900<br></br>
                5R: $8,300 - $10,230
              </Td>
              <Td class="column-4">
                3R, 4R: $11,900 - $33,800<br></br>
                5R: $10,230 - $36,100
              </Td>
            </TableRow>
            <TableRow class="row-22 even">
              <Td colspan="4" class="column-1">
                <strong>BEDROOM (PER ROOM)</strong>
              </Td>
            </TableRow>
            <TableRow class="row-23 odd">
              <Td rowspan="2" class="column-1">
                Hacking
              </Td>
              <Td class="column-2">
                3R: $100 - $200<br></br>
                4R, 5R: $100 - $600
              </Td>
              <Td class="column-3">
                3R: $200 - $300<br></br>
                4R, 5R: $600 - $1,000
              </Td>
              <Td class="column-4">
                3R: $300 - $4,300<br></br>
                4R, 5R: $1,000 - $5,200
              </Td>
            </TableRow>
            <TableRow class="row-24 even">
              <Td class="column-2">
                Dismantling of one fixture - a wardrobe, cabinet, bed frame,
                study table, door, window, or false ceiling without hacking of
                walls and/or floors.
              </Td>
              <Td class="column-3">
                Dismantling of several fixtures - wardrobes, cabinets, bed
                frames, study tables, doors, windows, or false ceilings with
                partial hacking of wall and/or floors.
              </Td>
              <Td class="column-4">
                Dismantling of all fixtures - wardrobes, cabinets, bed frames,
                study tables, doors, windows, and false ceilings with complete
                hacking of walls and/or floors.
              </Td>
            </TableRow>
            <TableRow class="row-25 odd">
              <Td rowspan="2" class="column-1">
                Carpentry
              </Td>
              <Td class="column-2">
                3R: $100 - $3,500<br></br>
                4R, 5R: $200 - $4,400
              </Td>
              <Td class="column-3">
                3R: $3,500 - $6,600<br></br>
                4R, 5R: $4,400 - $7,500
              </Td>
              <Td class="column-4">
                3R: $6,600 - $32,800<br></br>
                4R, 5R: $7,500 - $33,700
              </Td>
            </TableRow>
            <TableRow class="row-26 even">
              <Td class="column-2">
                Basic renovation of 1 home fixture, including full-height
                wardrobes, doors, study tables, headboards, bedframes, and
                bedside tables.
              </Td>
              <Td class="column-3">
                Regular renovation of 2-3 home fixtures, including full-height
                wardrobes, doors, study tables, headboards, bed frames, and
                bedside tables.
              </Td>
              <Td class="column-4">
                Extensive renovation of 3 or more home fixtures, including
                full-height wardrobes, doors, study tables, headboards, bed
                frames, and bedside tables.
              </Td>
            </TableRow>
            <TableRow class="row-27 odd">
              <Td rowspan="2" class="column-1">
                Masonry
              </Td>
              <Td class="column-2">
                3R: $100 - $300<br></br>
                4R, 5R: $200 - $1,200
              </Td>
              <Td class="column-3">
                3R: $300 - $1,800<br></br>
                4R, 5R: $1,200 - $2,700
              </Td>
              <Td class="column-4">
                3R: $1,800 - $7,900<br></br>
                4R, 5R: $2,700 - $8,800
              </Td>
            </TableRow>
            <TableRow class="row-28 even">
              <Td class="column-2">
                Basic construction of appliance/cabinetry bases and post-hacking
                touch-up, with little to no tiling.
              </Td>
              <Td class="column-3">
                Regular construction of appliance/cabinetry bases, post-hacking
                touch-up and tiling.
              </Td>
              <Td class="column-4">
                Comprehensive construction of appliance/cabinetry bases,
                post-hacking touch-up and tiling.
              </Td>
            </TableRow>
            <TableRow class="row-29 odd">
              <Td rowspan="2" class="column-1">
                Ceiling &amp; Partition
              </Td>
              <Td class="column-2">
                3R: $100 - $200<br></br>
                4R, 5R: $100 - $600
              </Td>
              <Td class="column-3">
                3R: $200 - $300<br></br>
                4R, 5R: $600 - $1,100
              </Td>
              <Td class="column-4">
                3R: $300 - $4,100<br></br>
                4R, 5R: $1,100 - $5,000
              </Td>
            </TableRow>
            <TableRow class="row-30 even">
              <Td class="column-2">
                Basic renovation of home fixtures, including box ups, partition
                beams/walls, pelmets and false ceilings w/ lighting.
              </Td>
              <Td class="column-3">
                Regular renovation of home fixtures, including box ups, partial
                partition walls, pelmets and partial L-box false ceilings w/
                lighting.
              </Td>
              <Td class="column-4">
                Comprehensive renovation of home fixtures, including box ups,
                full partition walls, pelmets and full L-box false ceilings w/
                lighting
              </Td>
            </TableRow>
            <TableRow class="row-31 odd">
              <Td class="column-1">
                <strong>Sub-total</strong>
              </Td>
              <Td class="column-2">
                3R: $400 - $4,200<br></br>
                4R, 5R: $600 - $6,800
              </Td>
              <Td class="column-3">
                3R: $4,200 - $9,000<br></br>
                4R, 5R: $6,800 - $12,300
              </Td>
              <Td class="column-4">
                3R: $9,000 - $49,100<br></br>
                4R, 5R: $12,300 - $52,700<br></br>
              </Td>
            </TableRow>
            <TableRow class="row-32 even">
              <Td colspan="4" class="column-1">
                <strong>BATHROOM SEWAGE/ PUMPING SYSTEM (PER BATHROOM)</strong>
              </Td>
            </TableRow>
            <TableRow class="row-33 odd">
              <Td rowspan="2" class="column-1">
                Hacking
              </Td>
              <Td class="column-2">All: $100 - $400</Td>
              <Td class="column-3">All: $400 - $900</Td>
              <Td class="column-4">All: $900 - $6,700</Td>
            </TableRow>
            <TableRow class="row-34 even">
              <Td class="column-2">
                Dismantling of one fixture - a sink, toilet bowl, vanity
                cabinet, door or bathroom accessory without hacking or floor
                and/or wall tiles.
              </Td>
              <Td class="column-3">
                Dismantling of two fixtures - a sink, toilet bowl, vanity
                cabinet, door or bathroom accessory without hacking or floor
                and/or wall tiles.
              </Td>
              <Td class="column-4">
                Dismantling of two fixtures -a sink, toilet bowl, vanity
                cabinet, door or bathroom accessory without hacking or floor
                and/or wall tiles.
              </Td>
            </TableRow>
            <TableRow class="row-35 odd">
              <Td rowspan="2" class="column-1">
                Carpentry
              </Td>
              <Td class="column-2">All: $100 - $1,100</Td>
              <Td class="column-3">All: $1,100 - $2,000</Td>
              <Td class="column-4">All: $2,000 - $8,900</Td>
            </TableRow>
            <TableRow class="row-36 even">
              <Td class="column-2">
                Basic renovation of one compact mirror or vanity storage
                cabinet.
              </Td>
              <Td class="column-3">
                Regular renovation of a one top-hung mirror or vanity storage
                cabinet.
              </Td>
              <Td class="column-4">
                Involves extensive renovation of a top-hung mirror vanity and
                bottom storage cabinet.
              </Td>
            </TableRow>
            <TableRow class="row-37 odd">
              <Td rowspan="2" class="column-1">
                Masonry
              </Td>
              <Td class="column-2">All: $100 - $1,400</Td>
              <Td class="column-3">All: $1,400 - $5,600</Td>
              <Td class="column-4">All: $5,600 - $17,400</Td>
            </TableRow>
            <TableRow class="row-38 even">
              <Td class="column-2">
                Basic construction of shower kerbs and post-hacking touch up,
                with little to no tiling.
              </Td>
              <Td class="column-3">
                Regular construction of shower kerbs, waterproofing,
                post-hacking touch-up and tiling.
              </Td>
              <Td class="column-4">
                Comprehensive construction of shower kerbs, waterproofing,
                post-hacking touch-up and tiling.
              </Td>
            </TableRow>
            <TableRow class="row-39 odd">
              <Td rowspan="2" class="column-1">
                Plumbing
              </Td>
              <Td class="column-2">All: $100 - $200</Td>
              <Td class="column-3">All: $200 - $700</Td>
              <Td class="column-4">All: $700 - $3,800</Td>
            </TableRow>
            <TableRow class="row-40 even">
              <Td class="column-2">
                Renovation of one water fixture - washbasin/tap, toilet bowls,
                shower set, bathtub or other bathroom accessories
              </Td>
              <Td class="column-3">
                Renovation of 2-3 water fixtures- washbasin/taps, toilet bowls,
                shower sets, bathtubs, and other bathroom accessories.
              </Td>
              <Td class="column-4">
                Renovation of 3 or more water fixtures like washbasin/tap,
                toilet bowls, shower sets, bathtubs and other bathroom
                accessories. Plus, extension and concealing work for pipes.
              </Td>
            </TableRow>
            <TableRow class="row-41 odd">
              <Td class="column-1">Sub-total</Td>
              <Td class="column-2">$400 - $3,100</Td>
              <Td class="column-3">$3,100 - $9,200</Td>
              <Td class="column-4">$9,200 - $36,800</Td>
            </TableRow>
            <TableRow class="row-42 even">
              <Td colspan="4" class="column-1">
                <strong>OTHERS</strong>
              </Td>
            </TableRow>
            <TableRow class="row-43 odd">
              <Td rowspan="2" class="column-1">
                Electrical wiring
              </Td>
              <Td class="column-2">
                3R, 4R: $300 - $1,900<br></br>
                5R: $700 - $2,400
              </Td>
              <Td class="column-3">
                3R, 4R: $1,900 - $3,100<br></br>
                5R: $2,400 - $3,600
              </Td>
              <Td class="column-4">
                3R, 4R: $3,100 - $16,000<br></br>
                5R: $3,600 - $16,500
              </Td>
            </TableRow>
            <TableRow class="row-44 even">
              <Td class="column-2">
                Basic renovation of electrical outlets such as lighting, data,
                heater and power points for select rooms.
              </Td>
              <Td class="column-3">
                Regular renovation of electrical outlets such as lighting, data
                heater and power points for most areas of the house.
              </Td>
              <Td class="column-4">
                Comprehensive renovation of electrical outlets across the house,
                including add-ons like extra lighting points and wire
                extensions.
              </Td>
            </TableRow>
            <TableRow class="row-45 odd">
              <Td rowspan="2" class="column-1">
                Painting
              </Td>
              <Td class="column-2">
                3R, 4R: $200 - $1,500<br></br>
                5R: $700 - $2,000
              </Td>
              <Td class="column-3">
                3R, 4R: $1,500 - $1,800<br></br>
                5R: $2,000 - $2,400
              </Td>
              <Td class="column-4">
                3R, 4R: $1,800 - $8,000<br></br>
                5R: $2,400 - $8,500
              </Td>
            </TableRow>
            <TableRow class="row-46 even">
              <Td class="column-2">
                Standard 2-3 coat wall and ceiling paint job for 1 room or
                studio unit.
              </Td>
              <Td class="column-3">
                Standard 2-3 coat wall and ceiling paint job for 2 rooms.
              </Td>
              <Td class="column-4">
                Standard 2-3 coat wall and ceiling paint job for 3 rooms or
                more.
              </Td>
            </TableRow>
            <TableRow class="row-47 odd">
              <Td rowspan="2" class="column-1">
                Glass/Aluminium
              </Td>
              <Td class="column-2">
                3R, 4R: $300 - $2,200<br></br>. 5R: $800 - $2,700
              </Td>
              <Td class="column-3">
                3R, 4R: $2,200 - $4,700<br></br>
                5R: $2,700 - $5,200
              </Td>
              <Td class="column-4">
                3R, 4R: $4,700 - $15,800<br></br>
                5R: $5,200 - $16,300
              </Td>
            </TableRow>
            <TableRow class="row-48 even">
              <Td class="column-2">
                Renovation of 1-2 glass fixtures such as windowpanes with little
                to no aluminium works done (e.g., fitting of new window
                grilles).
              </Td>
              <Td class="column-3">
                Renovation of 2 or more glass fixtures, such as windowpanes,
                mirrors or glass partitions. Includes additional aluminium works
                (e.g., fitting of new window grilles).
              </Td>
              <Td class="column-4">
                Renovation of 2 or more glass fixtures, such as windowpanes,
                mirrors, or glass partitions. Includes major aluminium works
                (e.g., changing of window and door grilles).
              </Td>
            </TableRow>
            <TableRow class="row-49 odd">
              <Td rowspan="2" class="column-1">
                Cleaning &amp; Polishing
              </Td>
              <Td class="column-2">
                3R, 4R: $300 - $1,100<br></br>
                5R: $800 - $1,600
              </Td>
              <Td class="column-3">
                3R, 4R: $1,100 - $1,800<br></br>
                5R: $1,600 - $2,300
              </Td>
              <Td class="column-4">
                3R, 4R: $1,800 - $13,900<br></br>
                5R: $2,300 - $14,400
              </Td>
            </TableRow>
            <TableRow class="row-50 even">
              <Td class="column-2">
                Cleaning of the entire house, installation of corrugated paper
                for floor protection, haulage, and debris disposal for minor
                renovations.
              </Td>
              <Td class="column-3">
                Cleaning of the entire house, acid/chemical wash, installation
                of corrugated paper for floor protection, haulage, and debris
                disposal for major renovations.
              </Td>
              <Td class="column-4">
                Cleaning of the entire house, acid/chemical wash, installation
                of corrugated paper for floor protection, haulage, debris
                disposal, polishing of marble and/or varnishing of parquet
                flooring.
              </Td>
            </TableRow>
            <TableRow class="row-51 odd">
              <Td class="column-1">
                <strong>TOTAL</strong>
              </Td>
              <Td class="column-2">
                3-room (2 bedrooms, 2 bathrooms, 1 living):{" "}
                <strong>$3,800 - $29,900</strong>
              </Td>
              <Td class="column-3">
                3-room (2 bedrooms, 2 bathrooms, 1 living):{" "}
                <strong>$30,910 - $70,700</strong>
              </Td>
              <Td class="column-4">
                3-room (2 bedrooms, 2 bathrooms, 1 living):{" "}
                <strong>$70,700 - $276,200</strong>
              </Td>
            </TableRow>
            <TableRow class="row-52 even">
              <Td class="column-1"></Td>
              <Td class="column-2">
                4-room (3 bedrooms, 2 bathrooms and 1 living):{" "}
                <strong>$4,200 - $31,900</strong>
              </Td>
              <Td class="column-3">
                4-room (3 bedrooms, 2 bathrooms and 1 living):{" "}
                <strong>$26, 700 - $89,600</strong>
              </Td>
              <Td class="column-4">
                4 (3 bedrooms, 2 bathrooms and 1 living):{" "}
                <strong>$89,600 - $372,900</strong>
              </Td>
            </TableRow>
            <TableRow class="row-53 odd">
              <Td class="column-1"></Td>
              <Td class="column-2">
                5-room (3 bedrooms, 2 bathrooms and 1 living):{" "}
                <strong>$9,500 - $51,500</strong>
              </Td>
              <Td class="column-3">
                5-room (3 bedrooms, 2 bathrooms and 1 living):{" "}
                <strong>$59,900 - $92,030</strong>
              </Td>
              <Td class="column-4">
                5-room (3 bedrooms, 2 bathrooms and 1 living):{" "}
                <strong>$89,960 - $378,100</strong>
              </Td>
            </TableRow>
          </Tbody>
        </TableContent>
      </Wrapper>
    </RenoBox>
  );
};

export default RenovationInfo;
