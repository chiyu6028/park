<template>
  <div>
    <el-upload
      class="park-upload"
      :action="actionUrl"
      list-type="picture-card"
      :auto-upload="true"
      :on-success="uploadSuccess"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      :limit="15"
      :on-exceed="handleExceed"
      :file-list="fileList">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}" class="park-upload-block">
          <div class="el-upload--picture-card">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
          </div>
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
          <el-input
            v-model="describle[file.uid]"
            :disabled="!describle[file.uid + 'disabled']"
            :placeholder="describle[file.uid + 'placeholder'] || '等待上传成功'"
            @input="limitLength(file)"
            @change="changeDesc(file)"></el-input>
        </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import * as _ from 'lodash'
import URL from '@config/urlConfig.js'
import T from '@utils/tools'

export default {
  name: 'upload',
  props: {
    value: {
      type: Array,
      default: () => ([])
    },
    reg: {
      type: Array
    },
    matchError: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      actionUrl: URL['UPLOAD'],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      describle: {},
      fileList: [],
      fileIds: []
    }
  },
  computed: {
    ids () {
      return this.fileIds.join(',')
    }
  },
  methods: {
    initFileList () {
      let fileIds = []; let fileList = []; let describle = {}
      _.each(this.value || [], v => {
        fileIds.push(v.attid)
        fileList.push({
          id: v.attid,
          uid: v.attid,
          name: v.attrealname,
          url: `/downloadFile?filePath=${window.encodeURIComponent(v.attpath)}`
        })
        describle[v.attid] = v.attdis
        describle[v.attid + 'disabled'] = true
        describle[v.attid + 'placeholder'] = '请输入'
      })
      this.fileIds = fileIds
      this.fileList = fileList
      this.describle = describle
    },
    beforeRemove () {
      // 去掉默认的按键删除事件
      if (event && event.type === 'keydown' && (event.keyCode === 46 || event.keyCode === 8)) {
        return false
      }
    },
    beforeUpload (file) {
      let name = (file.name || '').toLowerCase()
      let nameArr = name.split('.')
      let after = nameArr[nameArr.length - 1]
      if (!after) {
        this.$message.error('无法获取文件名!')
      }
      const reg = this.reg || ['png','jpeg','jpg', 'gif', 'tiff']
      const isJPG = reg.includes(after)
      if (!isJPG) {
        this.$message.error(this.matchError ? this.matchError : '上传图片只能是PNG、JPG、GIF或TIFF格式!')
      }
      return isJPG
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择15个文件，本次选择了${files.length}个文件，共选择了${files.length + fileList.length}个文件`)
    },
    handleRemove (file, fileList) {
      let list = _.filter(this.fileList, v => v.uid !== file.uid)
      this.fileList = list
      let ids = _.map(this.fileList, v => v.id)
      this.fileIds = ids
      this.$emit('setFileList', this.ids)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadSuccess (response, file, fileList) {
      if (response.code === 1) {
        let data = response.data || {}
        if (data.fileid) { // filepath
          file.id = data.fileid
          this.fileList.push(file)
          this.fileIds.push(data.fileid)
          this.$emit('setFileList', this.ids)
          this.describle[file.uid + 'disabled'] = true
          this.describle[file.uid + 'placeholder'] = '请输入'
        }
      }
    },
    limitLength1 (file) {
      const limit = 1000
      let string = this.describle[file.uid]
      let len = T.getStringLen(string)
      // 验证长度
      if (len > limit) {
        while (len > limit) {
          string = string.slice(0, -1)
          len = T.getStringLen(string)
        }
        this.describle[file.uid] = string
        this.$message.warning(`描述长度不能超过${limit}`)
      }
    },
    limitLength (file) {
      const limit = 30
      let string = this.describle[file.uid]
      let len = string.length
      // 验证长度
      if (len > limit) {
        while (len > limit) {
          string = string.slice(0, -1)
          len = string.length
        }
        this.describle[file.uid] = string
        this.$message.warning(`描述长度不能超过${limit}`)
      }
    },
    changeDesc (file) {
      if (file.response && file.response.data && file.response.data.fileid) {
        this.$axios.post(URL['UPDATE_FILEDES'], {
          fileid: file.response.data.fileid,
          filedes: this.describle[file.uid]
        }, { $cancelToken: true })
      } else if (file.id) {
        this.$axios.post(URL['UPDATE_FILEDES'], {
          fileid: file.id,
          filedes: this.describle[file.uid]
        }, { $cancelToken: true })
      }
    }
  },
  watch: {
    value () {
      this.initFileList()
    }
  }
}
</script>
<style>
  .el-upload--picture-card img{
    max-width: 240px;
    max-height: 160px;
  }
  .el-upload--picture-card img{
    width: auto !important;
    height: auto !important;
    border-radius: 0 !important;
    border: 0 !important;
  }
  .el-upload--picture-card{
    width: 242px !important;
    height: 162px !important;
    vertical-align: middle !important;
    text-align: center;
  }
  .el-upload-list__item{
    overflow: visible !important;
  }
  .park-upload ul.el-upload-list li{
    width: 240px !important;
    margin-bottom: 70px;
  }
  .park-upload ul.el-upload-list li .park-upload-block .el-upload-list__item-actions{
    height: 162px !important;
  }
  .park-upload-block .el-input{
    margin-top: 10px;
  }
  .park-upload {
    display: flex;
  }
</style>
