// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../lib/cheatcodes.sol";
import "../lib/console.sol";
import "../lib/ctest.sol";

import "../src/contract/Storage.sol";

contract StorageTest is CTest {
    event PaimaGameInteraction(address indexed userAddress, bytes data);

    CheatCodes cheats = CheatCodes(HEVM_ADDRESS);
    Storage strg;

    address account1 = 0x766FCe3d50d795Fe6DcB1020AB58bccddd5C5c77;
    address account2 = 0x078D888E40faAe0f32594342c85940AF3949E666;

    uint256 constant MAX_INT = 2**256 - 1;
    uint256 constant FEE = 1e16;

    function setUp() public {
        strg = new Storage(address(account1), FEE);
        cheats.deal(account1, 100 ether);
        cheats.deal(account2, 100 ether);
    }

    function testWithdraw() public {
        cheats.prank(account1);
        strg.withdrawFunds();
        assertEq(address(strg).balance, 0);
    }

    function testCannotWithdraw() public {
        cheats.prank(account2);
        cheats.expectRevert("Only owner can withdraw funds");
        strg.withdrawFunds();
    }

    function testCannotStoreWithoutFee() public {
        cheats.startPrank(account2);
        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.paimaSubmitGameInput("0x123456");
        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.paimaSubmitGameInput{value: FEE - 1}("0x123456");
        cheats.stopPrank();
    }

    function testStore() public {
        cheats.prank(account2);
        bytes memory data = "0x123456";
        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.paimaSubmitGameInput{value: FEE}(data);
        assertEq(address(strg).balance, FEE);
    }

    function testSpecificStores() public {
        cheats.startPrank(account2);
        bytes memory data = "0x123456";

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.createLobby{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.joinLobby{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitMoves{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.setNft{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput1{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput2{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput3{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput4{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput5{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput6{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput7{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput8{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput9{value: FEE}(data);

        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.submitAuxillaryGameInput10{value: FEE}(data);

        cheats.stopPrank();
        assertEq(address(strg).balance, 14 * FEE);
    }

    function testCannotSpecificStoresWithoutFee() public {
        cheats.startPrank(account2);
        bytes memory data = "0x123456";

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.createLobby{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.joinLobby{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitMoves{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.setNft{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput1{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput2{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput3{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput4{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput5{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput6{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput7{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput8{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput9{value: FEE - 1}(data);

        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.submitAuxillaryGameInput10{value: FEE - 1}(data);

        cheats.stopPrank();
    }

    function testStoreAndWithdraw() public {
        cheats.startPrank(account2);
        bytes memory data = "0x123456";
        strg.paimaSubmitGameInput{value: FEE}(data);
        strg.paimaSubmitGameInput{value: FEE}(data);
        strg.paimaSubmitGameInput{value: FEE}(data);
        cheats.stopPrank();
        assertEq(address(strg).balance, FEE * 3);
        cheats.prank(account1);
        strg.withdrawFunds();
        assertEq(address(strg).balance, 0);
    }

    function testBlockHeight() public {
        assertEq(strg.latestStoreHeight(account2), 0);
        uint256 newHeight = 101;
        cheats.roll(newHeight);
        cheats.prank(account2);
        strg.paimaSubmitGameInput{value: FEE}("0x123456");
        assertEq(strg.latestStoreHeight(account2), newHeight);
    }

    function testChangeOwner() public {
        assertEq(strg.owner(), account1);
        cheats.prank(account1);
        strg.setOwner(account2);
        assertEq(strg.owner(), account2);
        cheats.prank(account2);
        strg.withdrawFunds();
    }

    function testCannotChangeOwner() public {
        assertEq(strg.owner(), account1);
        cheats.prank(account2);
        cheats.expectRevert("Only owner can change owner");
        strg.setOwner(account1);
        assertEq(strg.owner(), account1);
    }

    function testChangeFee() public {
        uint256 newFee = FEE * 2;
        assertEq(strg.owner(), account1);
        assertEq(strg.fee(), FEE);
        cheats.prank(account1);
        strg.setFee(newFee);
        assertEq(strg.fee(), newFee);

        bytes memory data = "0x123456";
        cheats.prank(account2);
        cheats.expectRevert("Sufficient funds required to submit game input");
        strg.paimaSubmitGameInput{value: newFee - 1}(data);

        cheats.prank(account2);
        cheats.expectEmit(true, true, false, true);
        emit PaimaGameInteraction(account2, data);
        strg.paimaSubmitGameInput{value: newFee}(data);
        assertEq(address(strg).balance, newFee);
    }

    function testCannotChangeFee() public {
        assertEq(strg.fee(), FEE);
        cheats.prank(account2);
        cheats.expectRevert("Only owner can change fee");
        strg.setFee(FEE * 2);
        assertEq(strg.fee(), FEE);
    }
}
