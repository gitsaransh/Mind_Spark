# 🚀 MindSpark v2.0 - Quick Reference

## 🎯 WHAT CHANGED?

### **For Users:**
1. **Wrong answers less punishing** - Keep 40-50% of streak
2. **Ads give less but fairer** - 3 points instead of 5
3. **Ads have cooldowns** - Must solve 5 puzzles between ads
4. **Streak protection** - Earn freezes every 7 days
5. **Better start** - Begin with 2 points each session
6. **Day streak starts at 1** - Not 0!

### **For Developers:**
- Soft reset formula in `storage.js`
- Ad cooldown system in `hints.js`
- Freeze protection in `storage.js`
- New data structures for tracking
- Cache version updated to v6

---

## 📊 NEW ECONOMY

### **Earning Points:**
- ✅ Correct answer: +1 point
- 📺 Watch ad: +3 points (max 6/day, 5 puzzles between)
- 🎁 Milestones: +1 to +5 bonus points
- 🎯 Session start: +2 points

### **Spending Points:**
- 💡 Hint: -3 points (max 2 per puzzle)

### **Losing Points:**
- ❌ Wrong (streak ≥10): Lose 50%
- ❌ Wrong (streak 5-9): Lose 60%
- ❌ Wrong (streak <5): Lose 100%

---

## 🛡️ STREAK PROTECTION

### **Earning Freezes:**
- Every 7 days of streak = +1 freeze
- Maximum 3 freezes stored

### **Using Freezes:**
- Automatic when you skip a day
- Preserves your day streak
- Silent protection

---

## 🧪 QUICK TEST

```bash
# 1. Refresh page (Ctrl+R)
# 2. Open console (F12)
# 3. Check for "v2.0" in logs
# 4. Test soft reset:
#    - Get to 10 streak
#    - Get wrong answer
#    - Should keep ~5 points
```

---

## 📁 FILES CHANGED

- ✅ `js/storage.js` - Soft reset, freezes, data structures
- ✅ `js/hints.js` - Ad cooldown, reduced reward
- ✅ `sw.js` - Cache v6

---

## 🎉 STATUS

**Version:** 2.0  
**Cache:** v6  
**Ready:** ✅ YES  
**Test URL:** http://localhost:8000

---

**All critical v2.0 features are implemented and ready for testing!** 🚀
