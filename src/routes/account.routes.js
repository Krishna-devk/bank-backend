const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const accountController = require("../controllers/account.controller")


const router = express.Router()



/**
 * @swagger
 * /api/accounts:
 *   post:
 *     summary: Create a new account
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - balance
 *             properties:
 *               name:
 *                 type: string
 *               balance:
 *                 type: number
 *     responses:
 *       201:
 *         description: Account created successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/", authMiddleware.authMiddleware, accountController.createAccountController)


/**
 * @swagger
 * /api/accounts:
 *   get:
 *     summary: Get all accounts of the logged-in user
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of accounts
 *       401:
 *         description: Unauthorized
 */
router.get("/", authMiddleware.authMiddleware, accountController.getUserAccountsController)


/**
 * @swagger
 * /api/accounts/balance/{accountId}:
 *   get:
 *     summary: Get account balance
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: accountId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Account balance details
 *       404:
 *         description: Account not found
 */
router.get("/balance/:accountId", authMiddleware.authMiddleware, accountController.getAccountBalanceController)



module.exports = router