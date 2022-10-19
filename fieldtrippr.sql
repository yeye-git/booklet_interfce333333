-- Active: 1660795807335@@106.12.154.161@3306@IFB399

/*
 Navicat Premium Data Transfer
 Source Server         : My_1
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : fieldtrippr
 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001
 Date: 15/08/2022 12:12:44
 */

SET NAMES utf8mb4;

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------

-- Table structure for class

-- ----------------------------

DROP TABLE IF EXISTS `class`;

CREATE TABLE
    `class` (
        `ID` int(0) NOT NULL AUTO_INCREMENT,
        `Name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '# 7D',
        UNIQUE INDEX `ID`(`ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of class

-- ----------------------------

-- ----------------------------

-- Table structure for student booklet

-- ----------------------------

DROP TABLE IF EXISTS `student booklet`;

CREATE TABLE
    `student booklet` (
        `S_ID` int(0) NOT NULL AUTO_INCREMENT,
        `Questions` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#',
        `Answer` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#',
        `Image` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#',
        `Video` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#',
        `submission time` bigint(0) NULL DEFAULT NULL COMMENT '#',
        `Status` int(0) NULL DEFAULT NULL COMMENT '#mark status: 1. yes, 2. no ',
        `teacher feedback` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#',
        `Submission received page` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#',
        PRIMARY KEY (`S_ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of student booklet

-- ----------------------------

-- ----------------------------

-- Table structure for student bookshelf

-- ----------------------------

DROP TABLE IF EXISTS `student bookshelf`;

CREATE TABLE
    `student bookshelf` (
        `Student_ID` int(0) NOT NULL AUTO_INCREMENT,
        `Status` int(0) NULL DEFAULT NULL COMMENT '#booklet status: 1.to be complete, 2. completed ',
        `teacher feedback` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#',
        PRIMARY KEY (`Student_ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of student bookshelf

-- ----------------------------

-- ----------------------------

-- Table structure for subjects

-- ----------------------------

DROP TABLE IF EXISTS `subjects`;

CREATE TABLE
    `subjects` (
        `ID` int(0) NOT NULL AUTO_INCREMENT,
        `Name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#English , PE',
        `Code` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '#12345',
        UNIQUE INDEX `ID`(`ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of subjects

-- ----------------------------

-- ----------------------------

-- Table structure for teacher booklet

-- ----------------------------

DROP TABLE IF EXISTS `teacher booklet`;

CREATE TABLE
    `teacher booklet` (
        `T_ID` int(0) NOT NULL AUTO_INCREMENT COMMENT '#',
        `Questions` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Answer` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Image` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Video` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `release time` bigint(0) NULL DEFAULT NULL COMMENT '#',
        `Date` bigint(0) NULL DEFAULT NULL,
        PRIMARY KEY (`T_ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of teacher booklet

-- ----------------------------

-- ----------------------------

-- Table structure for teacher bookshelf

-- ----------------------------

DROP TABLE IF EXISTS `teacher bookshelf`;

CREATE TABLE
    `teacher bookshelf` (
        `Teacher_ID` int(0) NOT NULL AUTO_INCREMENT,
        `Status` int(0) NULL DEFAULT NULL COMMENT '#booklet status: 1. completed, 2 in progress',
        PRIMARY KEY (`Teacher_ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of teacher bookshelf

-- ----------------------------

-- ----------------------------

-- Table structure for teacher profile

-- ----------------------------

DROP TABLE IF EXISTS `teacher profile`;

CREATE TABLE
    `teacher profile` (
        `Teacher_ID` int(0) NOT NULL AUTO_INCREMENT,
        `Teacher_Email` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Teacher_Password` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Teacher_Name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Teacher_Bio` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Teacher_Instruction` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Teacher_Image` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        PRIMARY KEY (`Teacher_ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of teacher bookshelf

-- ----------------------------

-- ----------------------------

-- Table structure for student profile

-- ----------------------------

DROP TABLE IF EXISTS `student profile`;

CREATE TABLE
    `student profile` (
        `Student_ID` int(0) NOT NULL AUTO_INCREMENT,
        `Student_Email` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Student_Password` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Student_Name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Student_Bio` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Student_Fav_Subject` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        `Student_Image` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
        PRIMARY KEY (`Student_ID`) USING BTREE
    ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------

-- Records of teacher bookshelf

-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;