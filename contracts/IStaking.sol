// SPDX-License-Identifier: MIT

pragma solidity ^0.8.27;

interface IStaking {

    event Staked(address user, uint256 amount, uint256 time);
    event Claimed(address user, uint256 amount, uint256 time);
    event Unstaked(address user, uint256 amount, uint256 time);

    function stake(uint256 lpAmount) external view;
    function claim() external view;
    function unstake() external view;

    function setRewardTime(uint120 time) external view;
    function setRewardPercent(uint16 percent) external view;
    function setUnstakeTime(uint120 time) external view;

    function grantAdminRole(address admin) external view;
}