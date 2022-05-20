const shareLocationKey = "share_location"

Page({
        data: {
            shareLocation: false,
            userInfo: {},
            hasUserInfo: false,
            canIUseGetUserProfile: false,
            avatarUrl: '',
        },

        async onLoad() {
            this.setData({
                shareLocation: wx.getStorageSync(shareLocationKey) || false
            })
        },

        getUserProfile() {
            // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
            // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            wx.getUserProfile({
                desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        },

        onShareLocation(e: any) {
            const shareLocation: boolean = e.detail.value
            wx.setStorageSync(shareLocationKey, shareLocation)
        },

        onUnlockTap() {
            wx.showLoading({
                title: '开锁中',
                mask: true,
            })
            setTimeout(() => {
                wx.redirectTo({
                    url: '/pages/driving/driving',
                    complete: () => {
                        wx.hideLoading()
                    }
                })
            }, 2000)
        }
    }
)