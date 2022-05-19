Page({
    data: {
        licNum: '',
        name: '',
        genderIndex: 0,
        genders: ['未知', '男', '女', '其他'],
        birthDate: '1990-1-1',
        licImgURL: '',
        state: 'NotSubmitted' as 'NotSubmitted' | 'Pending' | 'Verified'
    },

    onUploadLic() {
        wx.chooseImage({
            success: res => {
                if (res.tempFilePaths.length > 0) {
                    this.setData({
                        licImgURL: res.tempFilePaths[0]
                    })
                    setTimeout(() => {
                        this.setData({
                            licNum: '1231531531414',
                            name: '张三',
                            genderIndex: 1,
                            birthDate: '1989-12-25'
                        })
                    }, 1000)
                }
            }
        })
    },

    onGenderChange(e: any) {
        this.setData({
            genderIndex: e.detail.value,
        })
    },

    onBirthDateChange(e: any) {
        this.setData({
            birthDate: e.detail.value,
        })
    },

    onSubmit() {
        this.setData({
            state: 'Pending',
        })
        setTimeout(() => {
            this.onLicVerified()
        }, 3000);
    },

    onResubmit() {
        this.setData({
            state: 'NotSubmitted',
            licImgURL: '',
        })
    },

    onLicVerified() {
        this.setData({
                state: 'Verified',
            }
        )
        // wx.redirectTo({
        //     url: '/pages/lock/lock'
        // })
    }
})