const express = require('express')
const cors = require('cors')
const supabase = require('../config/supabase')
const mysql2 = require('mysql2');

const router = express.Router();

exports.addMoney = async (req, res) => {
    try {
        const { amount, type, note, date } = req.body
        if (!amount || type || date) {
            return res.status(401).json({
                success: false,
                message: "ข้อมูลไม่ครบ"
            })
        }
        res.status(200).json({
            success: true,
            date: new Date()

        })
        console.log(req.body)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error"
        })
    }


}