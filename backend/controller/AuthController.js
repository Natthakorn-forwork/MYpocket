const express = require('express')
const cors = require('cors')
const supabase = require('../config/supabase')
const mysql2 = require('mysql2');

const router = express.Router();

exports.addMoney = (req, res) => {
    try {
        const { amount, note, date } = req.body
        if (!amount, date) {
            return res.status(401).json({
                success: false,
                message: "can not set a emtpy value"
            })
        }

    } catch (error) {

    }


}