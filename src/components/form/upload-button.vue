<template>
  <el-upload
    :action="actionUrl"
    :auto-upload="true"
    :on-success="uploadSuccess"
    :on-remove="handleRemove"
    :before-upload="beforeUpload"
    :limit="15"
    :on-exceed="handleExceed"
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>

<script>
import * as _ from 'lodash'
import URL from '@config/urlConfig.js'

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
      let fileIds = []; let fileList = []
      // this.rootUrl = process.env.NODE_ENV !== 'development' ? process.env.API_ROOT : '/api'
      _.each(this.value || [], v => {
        fileIds.push(v.attid)
        fileList.push({
          id: v.attid,
          uid: v.attid,
          name: v.attrealname,
          url: `/downloadFile?filePath=${window.encodeURIComponent(v.attpath)}`
        })
      })
      this.fileIds = fileIds
      this.fileList = fileList
    },
    beforeUpload (file) {
      if (!this.reg) return true
      const reg = this.reg
      let name = (file.name || '').toLowerCase()
      let nameArr = name.split('.')
      let after = nameArr[nameArr.length - 1]
      if (!after) {
        this.$message.error('无法获取文件名!')
      }
      const isJPG = reg.includes(after)
      if (!isJPG) {
        this.$message.error(this.matchError ? this.matchError : '上传图片格式不合要求!')
      }
      return isJPG
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择15个文件，本次选择了${files.length}个文件，共选择了${files.length + fileList.length}个文件`)
    },
    handleRemove (file) {
      let list = _.filter(this.fileList, v => v.uid !== file.uid)
      this.fileList = list
      let ids = _.map(this.fileList, v => v.id)
      this.fileIds = ids
      this.$emit('setFileList', this.ids)
    },
    uploadSuccess (response, file, fileList) {
      if (response.code === 1) {
        let data = response.data || {}
        if (data.fileid) { // filepath
          file.id = data.fileid
          this.fileList.push(file)
          this.fileIds.push(data.fileid)
          this.$emit('setFileList', this.ids)
        }
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
